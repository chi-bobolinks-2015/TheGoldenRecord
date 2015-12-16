Rails.application.routes.draw do

  root 'tracks#index'
  get 'tracks' => 'tracks#index'
  get 'shhhh' => 'amazon#index'

end
