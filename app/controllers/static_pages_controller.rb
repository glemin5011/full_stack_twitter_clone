class StaticPagesController < ApplicationController
  def home
    render 'home'
  end

  def signup
    render 'signup'
  end
  
  def signin
    render 'signin'
  end

  def feed
    render 'feed'
  end
end
