set :user, "cscott"
set :domain, "cscott.webfactional.com"
set :application, "requestdump"
set :repository,  "git://github.com/christopherscott/requestdump.git"
set :deploy_to, "~/webapps/#{application}"
set :use_sudo, false

default_run_options[:pty] = true
default_environment['PATH'] = "~/bin:$PATH"

role :web, domain                         # Your HTTP server, Apache/etc
role :app, domain                          # This may be the same as your `Web` server
role :db,  domain, :primary => true # This is where Rails migrations will run

namespace :deploy do

  desc "Deploy"
  task :default do
    run "cd #{deploy_to} && git pull"
    npm_install
    restart
  end

  desc "Stop forever"
  task :stop do
    run "forever stop #{application}.js"
  end

  desc "Start forever"
  task :start do
    run "cd #{deploy_to} && export PORT=26675 && forever start -al forever.log -o out.log -e err.log requestdump.js"
  end

  desc "Restart Forever"
  task :restart do
    stop
    sleep 5
    start
  end

  desc "Install modules"
  task :npm_install do
    run "cd #{deploy_to} && npm install"
  end

end

