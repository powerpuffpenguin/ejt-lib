{
  // 返回 opts?.default??default
  // - opts: Record<string, any>
  // - default: Record<string, any>
  get_base(opts, default): if std.objectHas(opts, 'default') then opts.default else default,

  // 返回 opts?.key??,
  get_default(opts, key, default): if std.objectHas(opts, key) then opts[key] else default,
}
