require 'rails_helper'

RSpec.describe 'Api::V1::HealthChecks', type: :request do
  describe 'GET /api/v1/health_check' do
    it 'succeed in health_check' do
      expect(response).to have_http_status(:ok)
    end
  end
end
