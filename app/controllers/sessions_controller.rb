class SessionsController < ApplicationController

  def new
  end

  def create
    admin = Admin.find_by_name(params[:name])
    if admin && admin.authenticate(params[:password])
      session[:admin_id] = admin.id
      redirect_to root_path
    else
      redirect_to root_path
    end
  end

  def destroy
    session[:admin_id] = nil
    redirect_to root_path
  end

end