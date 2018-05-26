window.onload = function() {

	/*
     * 
     * 	querySelector() 返回匹配指定选择器的第一个元素
     *	querySelectorAll() 返回匹配的所有元素
     *
     * Math.floor(x) 返回小于等于x的最大整数
     * Math.random() 返回介于0 ~ 1 之间的一个随机数
     * textContent 节点的文本内容
     * 
     * document.createElement() 是在对象中创建一个对象
     * appendChild() 或 insertBefore()方法联合使用
     * appendChild() 方法在节点的子节点列表末添加新的子节点
     * insertBefore() 方法在节点的子节点列表任意位置插入新的节点。
     * 
     * 
     * */ 

	//定义一个随机数，在 1~100 之间
	var randomNumber = Math.floor(Math.random() * 100) + 1;

	//获取页面节点
	//提示文字
	var guesses = document.querySelector(".guesses");
	var lastResult = this.document.querySelector(".lastResult");
	var lowOrHi = document.querySelector(".lowOrHi");

	// 操作按钮
	var guessSubmit = document.querySelector(".guessSubmit");
	var guessField = document.querySelector(".guessField");

	//猜测计数器
	var guessCount = 1;

	//定义开始游戏按钮的节点
	var resetButton;

	guessSubmit.addEventListener('click', checkGuess);

	function checkGuess() {
		//获取输入的数字
		var userGuess = Number(guessField.value);
		console.log(guessCount)
		//第一次猜测，开始记录历史的猜测数据
		if(guessCount === 1 && userGuess != NaN && userGuess != 0) {
			guesses.textContent = '猜测记录：';
		}
		if(userGuess != NaN && userGuess != 0) {
			guessCount++;
			guesses.textContent += userGuess + '  ';
		}

		if(userGuess === NaN || userGuess === 0) {
			lastResult.textContent = '请输入合法的数字';
			lastResult.style.backgroundColor = "red";
		} else if(userGuess === randomNumber) {
			lastResult.textContent = "恭喜你，猜对啦！！！";
			lastResult.style.backgroundColor = 'green';
			lowOrHi.textContent = '';
			// 猜测正确 结束游戏
			setGameOver();
		} else if(guessCount === 10) {
			lastResult.textContent = '机会用完，游戏结束啦';
			// 游戏结束
			setGameOver();
		} else {
			lastResult.textContent = "猜错啦，下次加油哟！"
			lastResult.style.backgroundColor = "red";
			if(userGuess < randomNumber) {
				lowOrHi.textContent = '你猜的太小啦';
			} else if(userGuess > randomNumber) {
				lowOrHi.textContent = '你猜的太大啦';
			}
		}
		// 提交结束，次数加1 清空输入框的文本 并且文本重新获取焦点

		guessField.value = '';
		guessField.focus();
	}

	// 游戏结束
	function setGameOver() {
		//输入框和提交按钮处于不可操作状态
		guessField.disabled = true;
		guessSubmit.disabled = true;

		//在 resetButton 中 创建一个 button
		resetButton = document.createElement('button');
		resetButton.textContent = '开始新的游戏';

		//将创建的button添加到body节点中
		document.body.appendChild(resetButton);

		//为开始新的游戏按钮添加监听事件
		resetButton.addEventListener('click', resetGame);
	}

	//开始新的游戏
	function resetGame() {
		//次数计时器重置
		guessCount = 1;

		//取得所有的提示p标签  遍历后将所有p标签的提示文字清空
		var resetParas = document.querySelectorAll('.resultParas p');
		for(var i = 0; i < resetParas.length; i++) {
			resetParas[i].textContent = '';
		}

		//将重新开始游戏的按钮清除
		resetButton.parentNode.removeChild(resetButton);

		//使输入框和提交按钮重新启动功能
		guessField.disabled = false;
		guessSubmit.disabled = false;

		//输入框获得焦点并且清除里面的值
		guessField.value = '';
		guessField.focus();

		lastResult.style.backgroundColor = 'white';

		//重新开始一个新的随机数
		randomNumber = Math.floor(Math.random() * 100) + 1;
	}

}