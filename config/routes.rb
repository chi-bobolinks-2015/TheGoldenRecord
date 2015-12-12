Rails.application.routes.draw do

  root 'welcome#index'
  get 'welcome' => 'welcome#index'
  get 'tracks' => 'tracks#index'

end
