#!/bin/sh

# https://wiki.squid-cache.org/FrontPage
# Since we are on localhost we have to avoid forwarding loops.
# Iptables can differentiate between packet owner users
# So we allow packets by root and squid through and divert everything else to Squid.
iptables -t nat -A OUTPUT -p tcp -m tcp --dport 80 -m owner --uid-owner root -j RETURN
# iptables -t nat -A OUTPUT -p tcp -m tcp --dport 80 -m owner --uid-owner mhr -j RETURN
iptables -t nat -A OUTPUT -p tcp -m tcp --dport 80 -j REDIRECT --to-ports 3129
iptables -t nat -A OUTPUT -p tcp -m tcp --dport 443 -m owner --uid-owner root -j RETURN
# iptables -t nat -A OUTPUT -p tcp -m tcp --dport 443 -m owner --uid-owner mhr -j RETURN
iptables -t nat -A OUTPUT -p tcp -m tcp --dport 443 -j REDIRECT --to-ports 3128
