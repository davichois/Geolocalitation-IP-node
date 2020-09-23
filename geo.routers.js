const { Router } = require("express");
const router = Router();

const geoip = require("geoip-lite");
const getIP = require("external-ip")();

router.get("/", (req, res) => {
  getIP((err, ip) => {
    if (err) {
      console.error("Error en el de devolver IP");
    }
    const geo = geoip.lookup(ip);
    res.json({
      "info De Geo": {
        ipPublic: ip,
        country: geo.country,
        region: geo.region,
        city: geo.city,
        timezone: geo.timezone,
        Lo_La: geo.ll,
      },
    });
  });
});

router.get("/:ip", (req, res) => {
  const ip = req.params.ip;
  const geo = geoip.lookup(ip);
  res.json({
    "info De Geo": {
      ipPublic: ip,
      country: geo.country,
      region: geo.region,
      city: geo.city,
      timezone: geo.timezone,
      Lo_La: geo.ll,
    },
  });
});

module.exports = router;
