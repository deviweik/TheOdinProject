#Bank Account Management:

# Create a BankAccount class that allows you to create and manage bank 
# accounts. The class can have methods for depositing, withdrawing, checking
# the balance, and displaying account information. You can also have a
# separate Transaction class to record and manage transactions.


class BankAccount 
  @@used_account_ids = []
  @@all_accounts = []
  attr_accessor :account_id, :account_holder_name, :pin, :balance, :verified, :unlocked

  def initialize()
    puts "\nWhat's your name:"
    @account_holder_name = gets.chomp
    puts "\nPlease enter a 4 digit string for your pin:"
    pin = gets.chomp
    until valid_pin?(pin)
      puts "\nPlease enter a valid pin."
      pin = gets.chomp
    end
    @pin = pin
    generate_unique_account_id
    puts "\n#{self.account_holder_name.split(" ").first}, your account with Account ID: #{self.account_id} has been created with Pin: #{self.pin}."
    @verified = true
    @unlocked = true
    @balance = 0

    @@all_accounts << self
  end

  def to_s()
    "\nHello #{self.account_holder_name.split(" ").first}, your account with Account ID: #{self.account_id} has a balance of $#{self.balance}."
  end

  private ###########################################################
  
  def valid_pin?(pin)
    return false unless pin.length == 4
    pin.each_char do |char|
      ascii_value = char.ord 
      return false unless (48..57).include?(ascii_value)
    end
    true
  end

  def generate_unique_account_id
    loop do
      @account_id = rand(1000000...9999999)
      unless @@used_account_ids.include?(@account_id)
        @@used_account_ids << @account_id
        break
      end
    end
  end

  def self.total_assets
    total = 0
    @@all_accounts.each do |account|
      total += account.balance
    end
    total
  end

  public ###########################################################

  def self.bank_summary(attributes)
    #return a summary of all accounts within the bank, reporting only the 
    #attributes that are specified in the input
  end

  def login()
    if !self.unlocked
      puts "\nYour account is locked, please contact our support line to unlock your account."
    else
      puts "\nPlease enter your pin:"
      pin = gets.chomp
      tries = 0
      until pin.to_s == @pin.to_s
        until valid_pin?(pin)
          puts "\nPlease enter a valid pin."
          pin = gets.chomp
        end
        tries += 1
        puts "\nThis pin is incorrect. Please try again, you have #{3-tries} attempt(s) left."
        if tries > 2
          puts "\nYou have entered your pin incorrectly too many times. Please contact our support line to unlock your account."
          self.unlocked = false
          break
        end
        pin = gets.chomp
      end
    end
    if self.unlocked
      self.verified = true
      puts "\nYou have successfully logged in to your account"
    end
  end

  def logout()
    self.verified = false
  end

  def deposit(amount)
    if self.verified && self.unlocked
      self.balance += amount
      puts "\nYou have successfully deposited $#{amount}. Your account balance is now $#{self.balance}. Don't forget to log out when you're finished."
    else
      puts "\nIn order to deposit funds into your account, please log in using your pin."
    end
  end

  def withdraw(amount)
    if self.verified && self.unlocked
      if (self.balance - amount) > 0
        self.balance -= amount
        puts "\nYou have successfully withdrawn $#{amount}. Your account balance is now $#{self.balance}. Don't forget to log out when you're finished."
      else
        puts "\nYou do not have enough funds in your account to withdraw $#{amount}. Your account balance is $#{self.balance}."
        if self.balance > 0
          loop do 
            puts "\nWould you still like to make a withdraw? Y/N"
            choice = gets.chomp.downcase
            case choice
            when "n"
              puts "\nHave a great day!"
              break
            when "y"
              puts "\nEnter withdrawal amount:"
              amount = gets.chomp.to_f
              self.withdraw(amount)
              break
            else
              puts "\nInvalid choice."
            end
          end
        end
      end
      
    else
      puts "\nIn order to withdraw funds into your account, please log in using your pin."
    end
  end

  def check_balance()
    if self.verified && self.unlocked
      puts "\nYour balance is $#{self.balance}. Don't forget to log out when you're finished."
    else
      puts "\nIn order to deposit funds into your account, please log in using your pin."
    end
  end

  def change_pin()
    puts "\nPlease enter your current pin."
    current_pin = gets.chomp
    until self.pin == current_pin
      puts "\nYour pin is incorrect. Please enter again."
      current_pin = gets.chomp
    end
    puts "\nWhat would you like to change your pin to?"
    new_pin = ""
    new_pin = gets.chomp
    until valid_pin?(new_pin)
      puts "\nPlease enter a valid pin."
      new_pin = gets.chomp
    end

    loop do 
      puts "\nPlease confirm you would like to change your pin to #{new_pin}? Y/N"
      choice = gets.chomp.downcase
      case choice
      when "n"
        puts "\nYour pin has not been changed.\n"
        break
      when "y"
        self.pin = new_pin
        puts "\nYour pin has been changed from #{current_pin} to #{self.pin}.\n"
        break
      else
        puts "\nInvalid choice."
      end
    end
  end
end

account = BankAccount.new()

choice = ""

until choice == "n"
  puts "\nHello, how can I help you today:"

  if account.verified && account.unlocked
    puts "1. Deposit"
    puts "2. Withdraw"
    puts "3. Check Balance"
    puts "4. Change PIN"
    puts "5. Logout"
    puts "6. Exit"

    choice = gets.chomp.to_i

    case choice
    when 1
      puts "\nEnter deposit amount:"
      amount = gets.chomp.to_f
      account.deposit(amount)
    when 2
      puts "\nEnter withdrawal amount:"
      amount = gets.chomp.to_f
      account.withdraw(amount)
    when 3
      account.check_balance
    when 4
      account.change_pin
    when 5
      account.logout
    when 6
      break
    else
      puts "\nInvalid choice."
    end
  else
    puts "1. Login"
    puts "2. Exit"

    choice = gets.chomp.to_i

    case choice
    when 1
      account.login
    when 2
      break
    else
      puts "\nInvalid choice."
    end
  end

  
  loop do 
    puts "\nDo you need anything else today? Y/N"
    choice = gets.chomp.downcase
    case choice
    when "n"
      puts "\nHave a great day!"
      break
    when "y"
      break
    else
      puts "\nInvalid choice."
    end
  end
end