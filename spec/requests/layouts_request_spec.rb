require 'rails_helper'

RSpec.describe 'Layouts', type: :request do
  describe 'GET /index' do
    it 'returns http success' do
      get '/layouts/index'
      expect(response).to have_http_status(:success)
    end
  end
end
