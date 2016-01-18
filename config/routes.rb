Rails.application.routes.draw do

  root 'tracks#index'
  get 'tracks' => 'tracks#index'
  get 'tracks/:id/edit' => 'tracks#edit', as: 'edit_track'
  put 'tracks/:id' => 'tracks#update'

  get 'shhhh' => 'amazon#index'

  resources :tracks

  # Routes to show an admin login form, logging them in, and logging them out.
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

end
