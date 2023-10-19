require 'json'

dictionary_file_path = './google-10000-english-no-swears.txt'

dictionary = []

File.open(dictionary_file_path, 'r') do |file|
  file.each do |word|
    dictionary << word.chomp
  end
end

class Game 
  attr_accessor :player

  def initialize(dictionary)
    @@game_board_steps = [
      [
        '   _____  ',
        '   |   |  ',
        '       |  ',
        '       |  ',
        '       |  '
      ],
      [
        '   _____  ',
        '   |   |  ',
        '   O   |  ',
        '       |  ',
        '       |  '
      ],
      [
        '   _____  ',
        '   |   |  ',
        '   O   |  ',
        '   |   |  ',
        '       |  '
      ],
      [
        '   _____  ',
        '   |   |  ',
        '   O   |  ',
        '  -|   |  ',
        '       |  '
      ],
      [
        '   _____  ',
        '   |   |  ',
        '   O   |  ',
        '  -|-  |  ',
        '       |  '
      ],
      [
        '   _____  ',
        '   |   |  ',
        '   O   |  ',
        '  -|-  |  ',
        '  /    |  '
      ],
      [
        '   _____  ',
        '   |   |  ',
        '   O   |  ',
        '  -|-  |  ',
        '  / \  |  '
      ]
    ]
    @@dictionary = dictionary
    @incorrect_guesses = []
    @correct_guesses = []
    @word = ''
    until @word.length > 4 && @word.length < 13 do
      @word = dictionary.sample
    end
    @player = initialize_player
    until @incorrect_guesses.length == 6 || @correct_guesses.length == @word.chars.uniq.length do
      play_turn
    end
    if @incorrect_guesses.length == 6
      puts "\nOh no! You're hanged #{@player}! :("
      puts "The word was #{@word}. Better luck next time!\n"
    else
      puts "\nCongrats #{@player}! You correctly guessed the word '#{@word}' and won the game!\n"
    end
  end

  def initialize_player
    puts "\n"
    puts "Welcome to Hangman! Please enter your name:\n"
    name = gets.chomp
    if File.exist?('saved_game.json')
      puts "\nWould you like to load your saved game? Y/N"
      loop do
        answer = gets.chomp.downcase
        if answer == 'y'
          load_game
          break
        elsif answer == 'n'
          break
        else
          puts "\nInvalid response. Please enter Y or N."
        end
      end
    end
    name
  end

  def play_turn
    post_game_board
    guess = prompt_guess
    if guess == 'save'
      save_game
    end
    if @word.include?(guess)
      @correct_guesses << guess
    else
      @incorrect_guesses << guess
    end
  end

  def prompt_guess
    puts "\n"
    puts "If you wish to save the game, enter 'save'"
    if (@correct_guesses.length + @incorrect_guesses.length) == 0
      puts "Please enter your first guess:\n"
    else
      puts "Please enter your next guess:\n"
    end
    guess = gets.chomp.downcase
    if guess == ''
      guess = '!'
    end
    until (guess.ord >= 97 && guess.ord <= 122 && !@incorrect_guesses.include?(guess) && !@correct_guesses.include?(guess) && guess.length == 1) || guess == 'save' do
      puts "\nOops! It looks like your guess was not valid or has already been used. Please enter a new letter:\n"
      guess = gets.chomp.downcase
    end
    guess
  end

  def post_game_board
    puts @@game_board_steps[@incorrect_guesses.length]
    word_display = []
    @word.each_char do |letter|
      if @correct_guesses.include?(letter)
        word_display << letter
      else 
        word_display << "_"
      end
    end
    puts word_display.join(" ")
    if (@incorrect_guesses.length > 0)
      puts "Incorrect guesses: #{@incorrect_guesses.join(", ")}"
    end
  end

  def save_game
    game_state = {
      player: @player,
      word: @word,
      correct_guesses: @correct_guesses,
      incorrect_guesses: @incorrect_guesses
    }
    serialized_game_state = game_state.to_json
    File.open('saved_game.json', 'w') do |file|
      file.write(serialized_game_state)
    end
    puts "#{@player}, you saved the game successfully!"
    exit
  end

  def load_game
    if File.exist?('saved_game.json')
      serialized_game_state = File.read('saved_game.json')
      game_state = JSON.parse(serialized_game_state)
      @player = game_state['player']
      @word = game_state['word']
      @correct_guesses = game_state['correct_guesses']
      @incorrect_guesses = game_state['incorrect_guesses']
      puts "Game loaded successfully!\n"
    else
      puts "No saved game found.\n"
    end
  end
end

keep_playing = true

until !keep_playing do
  game = Game.new(dictionary)
  loop do
    puts "\nWould you like to play again #{game.player}? Y/N"
    answer = gets.chomp.downcase
    if answer == 'y'
      keep_playing = true
      break
    elsif answer == 'n'
      keep_playing = false
      break
    else
      puts "\nInvalid response. Please enter Y or N."
    end
  end
end