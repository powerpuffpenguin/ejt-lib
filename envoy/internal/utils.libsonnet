{
  __(): {},
  // 返回 opts?.default??default
  // - opts: Record<string, any>
  // - default: Record<string, any>
  get_base(opts, default): if std.objectHas(opts, 'default') then opts.default else default,

  // 返回 opts?.key??,
  get_default(opts, key, default): if std.objectHas(opts, key) then opts[key] else default,


  // return (o?.key)? f(o.key) : default
  map_default(o, key, f, default): if std.objectHas(o, key) then f(o[key],) else default,
  // 查找元素是否存在數組中
  // - arrs= []
  // - exists: (val)=> boolean
  exists_array(arrs, exists):
    assert std.isArray(arrs) : 'arrs must be an Array';
    assert std.isFunction(exists) : 'exists must be a function';
    local f = function(val)
      local result = exists(val);
      assert std.isBoolean(result) : 'exists must return an boolean';
      result;
    std.foldl(function(last, v) if last then true else f(v), arrs, false),

  // 將 o[key]?: Array<any> 與另外一個數組合併
  // - o: Object
  // - key: string
  // - default= [] 不存時返回的默認值
  // - exists= (val)=> [val]==default 如果數組已經存在要添加的數據則返回 true
  // - append= (arrs:[])=> arrs+default 如何添加數據
  merge_field_array(opts):
    assert std.isObject(opts) : 'opts must be a Object';
    assert std.objectHas(opts, 'o') && std.isObject(opts.o) : 'opts.o must be a Object';
    assert std.objectHas(opts, 'key') && std.isString(opts.key) : 'opts.key must be a Object';
    local o = opts.o;
    local key = opts.key;

    local default = if std.objectHas(opts, 'default') then opts.default else [];
    assert std.isArray(default) : 'opts.default must be an Array';

    local existsf = if std.objectHas(opts, 'exists') then opts.exists else function(val) [val] == default;
    assert std.isFunction(existsf) : 'opts.exists must be a function';
    local exists = function(val)
      local result = existsf(val);
      assert std.isBoolean(result) : 'opts.exists must return an boolean';
      result;

    local appendf = if std.objectHas(opts, 'append') then opts.append else function(val) val + default;
    assert std.isFunction(appendf) : 'opts.append must be a function';
    local append = function(arrs)
      local result = appendf(arrs);
      assert std.isArray(result) : 'opts.append must return an Array';
      result;


    if std.objectHas(o, key) then (
      local arrs = o[key];
      assert std.isArray(arrs) : 'opts.o[' + key + '] must be an Array';
      if std.foldl(function(last, v) if last then true else exists(v), arrs, false) then
        arrs else append(arrs)
    ) else append([]),
}
