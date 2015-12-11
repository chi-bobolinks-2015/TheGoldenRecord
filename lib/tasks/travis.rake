task :travis do
  puts "Starting to run rake jasmine:ci..."
  system("export DISPLAY=:99.0 && bundle exec rake jasmine:ci")
  raise "rake jasmine:ci failed!" unless $?.exitstatus == 0
end
