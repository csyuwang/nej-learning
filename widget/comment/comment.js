NEJ.define([
    'base/klass',
    'base/element',
    'base/event',
    'ui/item/list',
    'util/template/tpl',
    'text!./comment.css',
    'text!./comment.html'
],function(_k,_e,_v,_i,_t,_css,_html,_p,_o,_f,_r){
    var _pro;

    // 列表项构造
    _p._$$CommentItem = _k._$klass();
    _pro = _p._$$CommentItem._$extend(_i._$$ListItem);

    // 外观
    _pro.__initXGui = (function(){
        var _seed_css = _e._$pushCSSText(_css),
            _seed_html = _t._$addNodeTemplate(_html);
        return function(){
            this.__seed_css = _seed_css;
            this.__seed_html = _seed_html;
        };
    })();

    // 结构
    _pro.__initNode = function(){
        this.__super();
        // 0 - 头像图片节点
        // 1 - 用户名节点
        // 2 - 内容节点
        // 3 - 操作行为节点
        var _list = _e._$getByClassName(
            this.__body,'j-flag'
        );
        this.__nface = _list[0];
        this.__nuser = _list[1];
        this.__ncont = _list[2];
        // 事件
        _v._$addEvent(
            _list[3],'click',
            this.__onAction._$bind(this)
        );
    };

    // 刷新
    _pro.__doRefresh = function(_data){
        this.__nface.src = _data.face;
        this.__nuser.innerHTML = _data.username;
        this.__ncont.innerHTML = _data.content;
        // 子评论列表
        if (!!_data.replies){
            // 子评论构造同当前评论项
            this.__items = _t._$getItemTemplate(
                _data.replies,this.constructor,{
                    parent:this.__body,
                    onreply:this.__onReply._$bind(this),
                    ondelete:this.__onDelete._$bind(this)
                }
            );
        }
    };

    _pro.__onReply = function() {

    };

    _pro.__onDelete = function() {

    };

    // 操作
    _pro.__onAction = function(_event){
        var _node = _v._$getElement(_event,'d:action');
        if (!_node) return;
        // 操作
        switch(_e._$dataset(_node,'action')){
            case 'reply':
                // 分配回复编辑器控件
                // 触发onreply事件
                alert('reply')
                // TODO
            break;
            case 'delete':
                // 删除确认
                // 触发ondelete事件
                alert('delete')
                // TODO
            break;
        }
    };

    // TODO

    return _p;
});
