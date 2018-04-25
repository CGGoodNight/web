function creatTable(parent, headData, bodyData) {
    var table = creatHead(parent, headData);
    
    creatBody(table, bodyData);
}

function creatHead(parent, headData) {
    //1.生成表头
    var table = document.createElement('table');
    parent.appendChild(table);
    
    var thead = document.createElement('thead');
    table.appendChild(thead);

    var tr = document.createElement('tr');
    thead.appendChild(tr);

    //遍历数组时创建td
    var td;
    headData.forEach(function(item) {
        td = document.createElement('td');
        tr.appendChild(td);
        setInnerText(td,item);
    });
    return table;
}

function creatBody(table, bodyData) {
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    //遍历数组生成数据行和列
    bodyData.forEach(function(item) {
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        //for 循环实现创建td
        for(var key in item) {
            var td = document.createElement('td');
            tr.appendChild(td);
            setInnerText(td,item[key]);
        }
        
        var td = document.createElement('td');
        tr.appendChild(td);
        var link = document.createElement('a');
        td.appendChild(link);
        setInnerText(link,'删除');
        link.href = 'javascript: void(0)';


        //创建事件实现点击删除删除某一行
        link.onclick = linkClick;
    })

    function linkClick() {
        var isDelete = confirm("你确定删除吗？");
        if (isDelete) {
            var tr = this.parentNode.parentNode;
            tr.remove();
        }

    }
}