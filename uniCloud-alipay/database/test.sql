db.collection("hm-user").updateMany(
  { $or: [{ email: null }, { email: "" }] },
  { $unset: { email: 1 } }
)