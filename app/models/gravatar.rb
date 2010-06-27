require 'digest/md5'

class Gravatar
  def self.for_email(email)
    Gravatar.new(email)
  end
  
  def to_html
    "<img src=\"http://www.gravatar.com/avatar/#{@hash}?s=147&d=identicon\" alt=\"Profile picture\" />" 
  end

  def initialize(email)
    @hash = Digest::MD5.hexdigest(email.downcase)
  end

  def ==(other)
    return false unless other.class == Gravatar 
    @hash == other.hash
  end

  attr_reader :hash
end