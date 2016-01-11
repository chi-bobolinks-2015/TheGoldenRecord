Rails.application.routes.draw do

  root 'tracks#index'
  get 'tracks' => 'tracks#index'
  get 'shhhh' => 'amazon#index'
  get 'tracks/new' => 'tracks#new'
  post 'tracks/new' => 'tracks#create'

end
