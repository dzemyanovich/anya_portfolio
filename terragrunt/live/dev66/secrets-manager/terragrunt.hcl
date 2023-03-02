terraform {
  source = "../../..//modules/secrets-manager"
}

inputs = {
  // todo: change to "dev.annapivunova.me"
  secrets_storage_name = "dev_temp4.annapivunova.me"
}
