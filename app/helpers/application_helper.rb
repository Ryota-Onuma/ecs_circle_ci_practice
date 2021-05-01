module ApplicationHelper
  def webpack_asset_path(path)
    "http://localhost:3500/#{path}"
  end
end
