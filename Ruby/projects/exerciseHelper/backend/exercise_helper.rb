  require 'json'

  # Read in exercise data from exercises.json [https://github.com/deviweik/exercises.json]
  exercise_data = JSON.parse(File.read('exercises.json'))

  
  class ExercisePlan
    attr_accessor :name, :force, :level, :mechanic, :equipment, :primary_muscles, :secondary_muscles, :instructions, :category

    def initialize(exercise_data)
      @name = exercise_data['name']
      @force = exercise_data['force']
      @level = exercise_data['level']
      @mechanic = exercise_data['mechanic']
      @equipment = exercise_data['equipment']
      @primary_muscles = exercise_data['primaryMuscles']
      @secondary_muscles = exercise_data['secondaryMuscles']
      @instructions = exercise_data['instructions']
      @category = exercise_data['category']
    end
  end

  # Define an Exercise class to represent each exercise
  class Exercise

  # Create Exercise objects for each exercise in the JSON data
  exercises = exercise_data['exercises'].map { |data| Exercise.new(data) }

  # Unique Forces: ["pull", "push", "static", nil]
  # Unique Levels: ["beginner", "intermediate", "expert"]
  # Unique Mechanics: ["compound", nil, "isolation"]
  # Unique Equipment: ["body only", "machine", "other", "foam roll", nil, "kettlebells", "dumbbell", "cable", "barbell", "bands", "medicine ball", "exercise ball", "e-z curl bar"]
  # Unique Primary Muscles: ["abdominals", "hamstrings", "adductors", "quadriceps", "biceps", "shoulders", "chest", "middle back", "calves", "glutes", "lower back", "lats", "triceps", "traps", "forearms", "neck", "abductors"]
  # Unique Secondary Muscles: ["calves", "shoulders", "glutes", "hamstrings", "quadriceps", "forearms", "abductors", "adductors", "triceps", "abdominals", "biceps", "lower back", "traps", "lats", "chest", "middle back", "neck"]
  # Unique Categories: ["strength", "stretching", "plyometrics", "strongman", "powerlifting", "cardio", "olympic weightlifting"]

  # Define a function to filter exercises by location and level
  def filter_exercises(exercise_data, location, levels)
    levels = levels.chars.map(&:to_i)

    filtered_exercises = exercise_data['exercises'].select do |exercise|
      # Check location criteria
      location_criteria = (location == 'home' && ['body only', 'bands', nil].include?(exercise['equipment'])) ||
                          (location == 'gym')

      # Check level criteria
      level_criteria = levels.include?(1) && exercise['level'] == 'beginner' ||
                      levels.include?(2) && exercise['level'] == 'intermediate' ||
                      levels.include?(3) && exercise['level'] == 'expert'

      # Return true if both location and level criteria match
      location_criteria && level_criteria
    end

    return filtered_exercises
  end

  location = ""
  levels = ""
  num = 0

  puts "Exercise Helper"
  puts "------------------------------------"
  loop do
    puts "\nAre you exercising at home or at the gym? (home/gym)"
    choice = gets.chomp.downcase
    if choice == "home"
      location = "home"
      break
    elsif choice == "gym"
      location = "gym"
      break
    else
      puts "Invalid Choice."
    end
  end

  loop do
    puts "\nWhat level exercises do you want to do today?"
    puts "1 = Beginner, 2 = Intermediate, 3 = Expert"
    puts "Enter a string of integers. Ex: '1' for beginner, '12' for beginner and intermediate"
    levels = gets.chomp
    if levels.match?(/^[123]+$/)
      break
    else
      puts "Invalid Choice."
    end
  end

  loop do
    puts "\nHow many exercises do you want in your plan today?"
    num = gets.chomp.to_i
    if num > 0
      break
    else
      puts "Invalid Choice."
    end
  end

  filtered_exercises = filter_exercises(exercise_data, location, levels)

  # Define methods to group exercises by primary muscles and categories
  def group_by_muscles(exercises)
    muscles_groups = {}
    exercises.each do |exercise|
      exercise['primaryMuscles'].each do |muscle|
        muscles_groups[muscle] ||= []
        muscles_groups[muscle] << exercise
      end
    end
    muscles_groups
  end

  def group_by_category(exercises)
    categories = {}
    exercises.each do |exercise|
      category = exercise['category']
      categories[category] ||= []
      categories[category] << exercise
    end
    categories
  end

  # Define a method to create a balanced workout plan
  def create_workout_plan(exercises, num_exercises)
    # Group exercises by primary muscles and categories
    muscle_groups = group_by_muscles(exercises)
    categories = group_by_category(exercises)

    workout_plan = []

    # Randomly select exercises from different muscle groups and categories
    num_exercises.times do
      random_muscle = muscle_groups.keys.sample
      random_category = categories.keys.sample

      muscle_exercises = muscle_groups[random_muscle] || []
      category_exercises = categories[random_category] || []

      exercise = (muscle_exercises & category_exercises).sample

      if exercise.nil?
        # If no matching exercise found, pick a random exercise from any category
        exercise = exercises.sample
      end

      workout_plan << exercise
    end

    workout_plan
  end

  workout_plan = create_workout_plan(filtered_exercises, num)

  # Print the workout plan
  puts "Your Balanced Workout Plan:"
  workout_plan.each do |exercise|
    puts "Exercise Name: #{exercise['name']}"
    puts "Category: #{exercise['category']}"
    puts "Primary Muscles: #{exercise['primaryMuscles'].join(', ')}"
    puts "Secondary Muscles: #{exercise['secondaryMuscles'].join(', ')}"
    puts "Instructions: #{exercise['instructions'][0]}"
    puts "\n"
  end