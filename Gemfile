source 'https://rubygems.org/'
ruby '2.5.1'

gem 'rails', '~> 5.1.2'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'jquery-rails'
gem 'simple_form'
gem 'turbolinks'
gem 'jbuilder'
gem 'devise', git: 'https://github.com/plataformatec/devise' #, ref: '88e9a85'
gem 'foundation-rails'
gem 'carrierwave'
gem 'active_model_serializers', '<= 0.9.9'


group :development do
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :development, :test do
  gem 'capybara'
  gem 'factory_girl_rails'
  gem 'launchy', require: false
  gem 'pry-rails'
  gem 'rspec-rails', '~> 3.5'
  gem 'shoulda'
  gem 'valid_attribute'
  gem 'shoulda-matchers', require: false
end
group :test do
  gem 'coveralls', require: false
end
group :production do
  gem 'rails_12factor'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
