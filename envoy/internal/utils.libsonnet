{
  // 返回 opts?.default??default
  // - opts: Record<string, any>
  // - default: Record<string, any>
  get_base(opts, default): if std.objectHas(opts, 'default') then opts.default else default,

  // 返回 opts?.key??,
  get_default(opts, key, default): if std.objectHas(opts, key) then opts[key] else default,


  // return (o?.key)? f(o.key) : default
  map_default(o, key, f, default): if std.objectHas(o, key) then f(o[key],) else default,
  // return f(v) exists at arr
  find(arr, f): std.foldl(function(v) if v then true else f(v), arr, false),
}
