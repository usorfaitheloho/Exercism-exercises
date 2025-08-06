=begin
Write your code for the 'Two Fer' exercise in this file. Make the tests in
`two_fer_test.rb` pass.
=end

# you need a class and then in a method ,it should be that if the name is given,puts "one for ${name}, one for me" else puts{ one for you,one for me}

module TwoFer
  def self.two_fer(name=nil) 
    if name
      "One for #{name}, one for me."
    else 
      "One for you, one for me."
    end
  end
end