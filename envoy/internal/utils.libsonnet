{
  // 返回 opts?.default??default
  // - opts: Record<string, any>
  // - default: Record<string, any>
  get_base(opts, default): if std.objectHas(opts, 'default') then opts.default else default,
}
