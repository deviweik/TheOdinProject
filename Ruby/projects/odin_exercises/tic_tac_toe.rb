class TicTacToe
  attr_accessor :board

  def initialize
    # Initialize the game board (3x3 grid)
    @board = [[".", ".", "."], [".", ".", "."], [".", ".", "."]]
  end

  def play
    # Main game loop
    # Display the initial empty board
    display_board
    # Create players
    player1 = Player.new('X')
    player2 = Player.new('O')
    # Start taking turns until a player wins or it's a tie
    winner = nil
    current_player = player1
    until winner || tie?
      get_player_move(current_player)
      display_board
      winner = check_winner
      current_player = current_player == player1 ? player2 : player1
    end
    # Display the result (win, tie, or quit)
    display_result(winner)
  end

  private

  def display_board
    # Display the current state of the game board
    puts "\n  A B C" + "\n" + "1 " + board[0].join(" ") + "\n" + "2 " + board[1].join(" ") + "\n" + "3 " + board[2].join(" ")
  end

  def get_player_move(player)
    # Prompt the player for their move (e.g., "Enter your move (e.g., A1): ")
    # Validate the move (check if it's a valid cell, not already taken)
    puts "\n#{player.name}, please enter your move (e.g., A1): "
    move = gets.chomp
    move_coords = interpret_move(move)
    until board[move_coords[0]][move_coords[1]] == '.'
      puts "\n#{player.name}, that spot is taken. Please enter your move (e.g., A1): "
      move = gets.chomp
      move_coords = interpret_move(move)
    end
    # Update the game board with the player's move
    board[move_coords[0]][move_coords[1]] = player.symbol
  end

  def interpret_move(move)
    col = nil
    case move[0]
    when 'A'
      col = 0
    when 'B'
      col = 1
    when 'C'
      col = 2
    end
    [move[1].to_i - 1, col]
  end

  def check_winner
    # Check if there's a winner on the current board
    # Return the winning player (X or O) or nil if no winner yet
    board.each do |row|
      return row[0] if row.uniq.length == 1 && row[0] != '.'
    end

    board.transpose.each do |col|
      return col[0] if col.uniq.length == 1 && col[0] != '.'
    end

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '.') || (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != '.')
      return board[1][1]
    end

    nil # No Winner
  end

  def tie?
    # Check if the game is a tie (no more empty cells)
    board.each do |row|
      return false if row.any? { |piece| piece == '.' }
    end

    true
  end

  def display_result(result)
    # Display the game result (win, tie, or quit)
    winning_player = Player.find_player_with_symbol(result)
    if winning_player
      puts "\n#{winning_player.name} wins!"
    else
      puts "\nIt's a tie!"
    end
  end
end

class Player
  attr_accessor :name, :symbol

  @@players = []
  def initialize(symbol)
    # Initialize a player with a name and symbol (X or O)
    puts "\nEnter name for player #{@@players.length + 1} (#{symbol}):"
    @name = gets.chomp
    @symbol = symbol
    @@players << self
  end

  def self.find_player_with_symbol(symbol)
    @@players.each do |player|
      return player if player.symbol == symbol
    end
    nil # no player found
  end
end

# Main part of the program
if __FILE__ == $PROGRAM_NAME
  # Create two Player objects for player 1 (X) and player 2 (O)
  # Create a TicTacToe game
  game = TicTacToe.new
  # Start the game by calling the play method
  game.play
end
