provider "digitalocean" {
  token = var.do_token
}

resource "digitalocean_droplet" "web" {
  name   = "react-web-01"
  region = "nyc1"
  size   = "s-2vcpu-2gb"
  image  = "ubuntu-24-04-x64"
  ssh_keys = [var.ssh_fingerprint]
  tags   = ["react-app"]
}

output "ip_address" {
  value = digitalocean_droplet.web.ipv4_address
}
