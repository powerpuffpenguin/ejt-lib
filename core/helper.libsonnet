// 一些工具函數
{
  __(): {},

  // 返回 o?.key??default
  // - o: Object
  // - key: string
  // - default:any = null
  get_default(o, key, default=null):
    assert std.isObject(o) : 'o must be a Object';
    assert std.isString(key) : 'key must be a String';
    if std.objectHas(o, key) then o[key] else default,

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

  // 爲 o 依次調用 arrs 中存儲的函數
  // - arrs: Array<(o: Object)=>Object>
  // - o= {}
  apply(arrs, o={}):
    assert std.isArray(arrs) : 'arrs must be an Array';
    assert std.isObject(o) : 'o must be a Object';
    std.foldl(function(last, f)
      assert std.isFunction(f) : 'arrs[n] must be a Function';
      local ff = function(o)
        local result = f(last);
        assert std.isObject(result) : 'arrs[n](o) must return a Object';
        result;
      ff(last), arrs, o),
}
