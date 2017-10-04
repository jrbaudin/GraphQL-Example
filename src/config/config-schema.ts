export interface IConfig {
  dev: number
  logging: {
    level: string
  }
  bcrypt_hash_rounds: number
  server: {
    prod: {
      ports: {
        main: number
        auth: number
        graphql: number
        websocket: number
      }
    }
    dev: {
      ports: {
        main: number
        auth: number
        graphql: number
        websocket: number
      }
    }
  }
  database: {
    prod: {
      username: string
      password: string
      database: string
      host: string
      port: string
    }
    dev: {
      username: string
      password: string
      database: string
      host: string
      port: string
    }
  }
  message_broker: {
    prod: {
      broker_address: string
      broker_port: number
      rabbitmq_user: string
      rabbitmq_password: string
    }
    dev: {
      broker_address: string
      broker_port: number
      rabbitmq_user: string
      rabbitmq_password: string
    }
  }
  segment: {
    prod: {
      write_key: string
    }
    dev: {
      write_key: string
    }
  }
}
