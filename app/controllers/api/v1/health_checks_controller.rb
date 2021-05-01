class Api::V1::HealthChecksController < ApplicationApiController
  def health_check
    render status: :ok, json: { status: 200, message: 'Success' }
  end
end
