FROM ruby:2.5
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
WORKDIR /app

COPY ./app/Gemfile /webapp/Gemfile
COPY ./app/Gemfile.lock /webapp/Gemfile.lock
COPY . /myapp

RUN cd /webapp && bundle install
ADD . /webapp

COPY ./docker-entrypoint.sh /
RUN chmod +x /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]