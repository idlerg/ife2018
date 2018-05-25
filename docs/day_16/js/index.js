window.onload = function () {
    // 页面切换js代码
    var ulNode = document.getElementsByClassName("asideList")[0];
    //console.log(ulNode);

    var lis = ulNode.getElementsByTagName("li");
    //console.log(lis)

    var secNode = document.getElementsByTagName("section");
    //console.log(secNode)

    //console.log(lis.length)

    //遍历节点并为每个节点添加点击事件
    for (let i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function () {
            //console.log(this.index)
            for (let j = 0; j < secNode.length; j++) {
                secNode[j] = j;
                if (i == j) {
                    secNode[j].style.display = "block";
                } else {
                    secNode[j].style.display = "none";
                }
            }
        }
    };


    //打招呼
    var oHello = document.getElementById("hello");
    var oHelloText = this.document.getElementById("helloText");
    oHello.onclick = function(){
        var oMessage = prompt("您好，您向我打招呼了，留点什么吧");
        oHelloText.innerHTML = "谢谢您的留言：" + oMessage;
    }

    //特殊爱好
    var oHobby = document.getElementById("hobby");
    var oHobbyText = document.getElementById("hobbyText");
    oHobby.onclick  = function(){
        oHobbyText.innerHTML = "代码代码代码..."
    }

}