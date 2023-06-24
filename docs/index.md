<div class="heading" id="naming">
  <h2>命名规则</h2>
</div>

<SingleRuleItem id="project-naming" title="项目命名">
    <template #detail>
        <p>全部采用小写方式， 以下划线分隔。</p>
        <p>例：my_project_name</p>
    </template>
</SingleRuleItem>

<SingleRuleItem id="folder-naming" title="目录命名">
    <template #detail>
        <p>参照项目命名规则；</p>
        <p>有复数结构时，要采用复数命名法。</p>
        <p>例：scripts, styles, images, data_models</p>
    </template>
</SingleRuleItem>

<SingleRuleItem id="js-naming" title="JS文件命名">
    <template #detail>
        <p>参照项目命名规则。</p>
        <p>例：account_model.js</p>
    </template>
</SingleRuleItem>

<SingleRuleItem id="css-naming" title="CSS, SCSS文件命名">
    <template #detail>
        <p>参照项目命名规则。</p>
        <p>例：retina_sprites.scss</p>
    </template>
</SingleRuleItem>

<SingleRuleItem id="html-naming" title="HTML文件命名">
    <template #detail>
        <p>参照项目命名规则。</p>
        <p>例：error_report.html</p>
    </template>
</SingleRuleItem>

<div class="heading" id="html">
  <h2>HTML</h2>
</div>

<SingleRuleItem id="html-syntax" title="语法">
    <template #detail>
        <ul>
            <li>缩进使用soft tab(4个空格)；</li>
            <li>嵌套的节点应该缩进；</li>
            <li>在属性上，使用双引号，不要使用单引号；</li>
            <li>属性名全小写，用中划线做分隔符；</li>
            <li>不要在自动闭合标签结尾处使用斜线(<a href="http://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag">HTML5 规范</a> 指出他们是可选的)；</li>
            <li>不要忽略可选的关闭标签，例：<code>&lt;/li&gt;</code> 和 <code>&lt;/body&gt;</code>。</li>
        </ul>
    </template>
<template #code>
    
@[code](./rulesCode/html-syntax.html)

</template>
</SingleRuleItem>

<SingleRuleItem id="html-doctype" title="HTML5 doctype">
    <template #detail>
        <p>在页面开头使用这个简单地doctype来启用标准模式，使其在每个浏览器中尽可能一致的展现；</p>
        <p>虽然doctype不区分大小写，但是按照惯例，doctype大写 （<a href="http://stackoverflow.com/questions/15594877/is-there-any-benefits-to-use-uppercase-or-lowercase-letters-with-html5-tagname" target="_blank">关于html属性，大写还是小写</a>）。</p>
    </template>
<template #code>

@[code](./rulesCode/html-doctype.html)

</template>
</SingleRuleItem>

<SingleRuleItem id="html-lang" title="lang属性" :eslint="{rule:'@html-eslint/require-lang', link:'https://yeonjuan.github.io/html-eslint/docs/rules/require-lang/'}">
    <template #detail>
        <p>根据HTML5规范：</p>
        <blockquote>
            <p>应在html标签上加上lang属性。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。</p>
        </blockquote>
        <p>更多关于 <code>lang</code> 属性的说明<a target="_blank" href="http://www.w3.org/html/wg/drafts/html/master/semantics.html#the-html-element">在这里</a>；</p>
        <p>在sitepoint上可以查到<a target="_blank" href="http://reference.sitepoint.com/html/lang-codes">语言列表</a>；</p>
        <p>但sitepoint只是给出了语言的大类，例如中文只给出了zh，但是没有区分香港，台湾，大陆。而微软给出了一份更加<a target="_blank" href="http://msdn.microsoft.com/en-us/library/ms533052(v=vs.85).aspx">详细的语言列表</a>，其中细分了zh-cn, zh-hk, zh-tw。</p>
    </template>
<template #code>

@[code](./rulesCode/html-lang.html)

</template>
</SingleRuleItem>

<SingleRuleItem id="html-encoding" title="字符编码">
    <template #detail>
        <p>通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。</p>
    </template>
<template #code>

@[code](./rulesCode/html-encoding.html)

</template>
</SingleRuleItem>

<SingleRuleItem id="html-ie-compatibility-mode" title="IE兼容模式">
    <template #detail>
        <p>用 <code>&lt;meta&gt;</code> 标签可以指定页面应该用什么版本的IE来渲染；</p>
        <p>如果你想要了解更多，请点击<a href="http://stackoverflow.com/questions/6771258/whats-the-difference-if-meta-http-equiv-x-ua-compatible-content-ie-edge-e">这里</a>；</p>
        <p>不同doctype在不同浏览器下会触发不同的渲染模式（<a href="https://hsivonen.fi/doctype/">这篇文章</a>总结的很到位）。</p>
    </template>
<template #code>

@[code](./rulesCode/html-ie-compatibility-mode.html)

</template>
</SingleRuleItem>

<SingleRuleItem id="html-style-script" title="引入CSS, JS">
    <template #detail>
        <p>根据HTML5规范, 通常在引入CSS和JS时不需要指明 <code>type</code>，因为 <code>text/css</code> 和 <code>text/javascript</code> 分别是他们的默认值。</p>
        <h4>HTML5 规范链接</h4>
        <ul>
            <li><a target="_blank" href="http://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-link-element">使用link</a></li>
            <li><a target="_blank" href="http://www.w3.org/TR/2011/WD-html5-20110525/semantics.html#the-style-element">使用style</a></li>
            <li><a target="_blank" href="http://www.w3.org/TR/2011/WD-html5-20110525/scripting-1.html#the-script-element">使用script</a></li>
        </ul>
    </template>
<template #code>

@[code](./rulesCode/html-style-script.html)

</template>
</SingleRuleItem>

<SingleRuleItem id="html-attribute-order" title="属性顺序">
    <template #detail>
        <p>属性应该按照特定的顺序出现以保证易读性；</p>
        <ul>
            <li><code>class</code></li>
            <li><code>id</code></li>
            <li><code>name</code></li>
            <li><code>data-*</code></li>
            <li><code>src</code>, <code>for</code>, <code>type</code>, <code>href</code>, <code>value</code> , <code>max-length</code>, <code>max</code>, <code>min</code>, <code>pattern</code></li>
            <li><code>placeholder</code>, <code>title</code>, <code>alt</code></li>
            <li><code>aria-*</code>, <code>role</code></li>
            <li><code>required</code>, <code>readonly</code>, <code>disabled</code></li>
        </ul>
        <p>class是为高可复用组件设计的，所以应处在第一位；</p>
        <p>id更加具体且应该尽量少使用，所以将它放在第二位。</p>
    </template>
<template #code>

@[code](./rulesCode/html-attribute-order.html)

</template>
</SingleRuleItem>

<SingleRuleItem id="html-boolean-attributes" title="boolean属性">
    <template #detail>
        <p>boolean属性指不需要声明取值的属性，XHTML需要每个属性声明取值，但是HTML5并不需要；</p>
        <p>更多内容可以参考 <a href="http://www.whatwg.org/specs/web-apps/current-work/multipage/common-microsyntaxes.html#boolean-attributes">WhatWG section on boolean attributes</a>：</p>
        <blockquote>
            <p>boolean属性的存在表示取值为true，不存在则表示取值为false。</p>
        </blockquote>
    </template>
<template #code>

@[code](./rulesCode/html-boolean-attributes.html)

</template>
</SingleRuleItem>

<SingleRuleItem id="html-javascript" title="JS生成标签">
    <template #detail>
        <p>在JS文件中生成标签让内容变得更难查找，更难编辑，性能更差。应该尽量避免这种情况的出现。</p>
    </template>
</SingleRuleItem>

<SingleRuleItem id="html-reducing-markup" title="减少标签数量">
    <template #detail>
        <p>在编写HTML代码时，需要尽量避免多余的父节点；</p>
        <p>很多时候，需要通过迭代和重构来使HTML变得更少。</p>
    </template>
<template #badCode>

@[code](./rulesCode/html-reducing-markup-bad.html)

</template>
<template #goodCode>

@[code](./rulesCode/html-reducing-markup-good.html)

</template>
</SingleRuleItem>

<SingleRuleItem id="html-practicality" title="实用高于完美">
    <template #detail>
        <p>尽量遵循HTML标准和语义，但是不应该以浪费实用性作为代价；</p>
        <p>任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。</p>
    </template>
</SingleRuleItem>

<div class="heading" id="css">
  <h2>CSS, SCSS</h2>
</div>

<SingleRuleItem id="css-indentation" title="缩进">
    <template #detail>
        <p>使用soft tab（4个空格）。</p>
    </template>
<template #code>

@[code](./rulesCode/css-indentation.css)

</template>
</SingleRuleItem>

<SingleRuleItem id="css-semicolon" title="分号">
    <template #detail>
        <p>每个属性声明末尾都要加分号。</p>
    </template>
<template #code>

@[code](./rulesCode/css-semicolon.css)

</template>
</SingleRuleItem>

<SingleRuleItem id="css-space" title="空格">
    <template #detail>
         <p>以下几种情况不需要空格：</p>
        <ul>
            <li>属性名后</li>
            <li>多个规则的分隔符','前</li>
            <li><code>!important</code> '!'后</li>
            <li>属性值中'('后和')'前</li>
            <li>行末不要有多余的空格</li>
        </ul>
        <p>以下几种情况需要空格：</p>
        <ul>
            <li>属性值前</li>
            <li>选择器'>', '+', '~'前后</li>
            <li>'{'前</li>
            <li><code>!important</code> '!'前</li>
            <li><code>@else</code> 前后</li>
            <li>属性值中的','后</li>
            <li>注释'/*'后和'*/'前</li>
        </ul>
    </template>
<template #badCode>

@[code](./rulesCode/css-space-bad.css)

</template>
<template #goodCode>

@[code](./rulesCode/css-space-good.css)

</template>
</SingleRuleItem>

<SingleRuleItem id="css-blank-line" title="空行">
    <template #detail>
        <p>以下几种情况需要空行：</p>
        <ul>
            <li>文件最后保留一个空行</li>
            <li>'}'后最好跟一个空行，包括scss中嵌套的规则</li>
            <li>属性之间需要适当的空行，具体见<a href="#css-declaration-order">属性声明顺序</a></li>
        </ul>
    </template>
<template #badCode>

@[code](./rulesCode/css-blank-line-bad.scss)

</template>
<template #goodCode>

@[code](./rulesCode/css-blank-line-good.scss)

</template>
</SingleRuleItem>

<SingleRuleItem id="css-new-line" title="换行">
    <template #detail>
        <p>以下几种情况不需要换行：</p>
        <ul>
            <li>'{'前</li>
        </ul>
        <p>以下几种情况需要换行：</p>
        <ul>
            <li>'{'后和'}'前</li>
            <li>每个属性独占一行</li>
            <li>多个规则的分隔符','后</li>
        </ul>
    </template>
<template #badCode>

@[code](./rulesCode/css-new-line-bad.css)

</template>
<template #goodCode>

@[code](./rulesCode/css-new-line-good.css)

</template>
</SingleRuleItem>

<SingleRuleItem id="css-comments" title="注释">
    <template #detail>
        <p>注释统一用'/* */'（scss中也不要用'//'），具体参照右边的写法；</p>
        <p>缩进与下一行代码保持一致；</p>
        <p>可位于一个代码行的末尾，与代码间隔一个空格。</p>
    </template>
<template #code>

@[code](./rulesCode/css-comments.css)

</template>
</SingleRuleItem>

<SingleRuleItem id="css-quote-marks" title="引号">
    <template #detail>
        <p>最外层统一使用双引号；</p>
        <p>url的内容要用引号；</p>
        <p>属性选择器中的属性值需要引号。</p>
    </template>
<template #code>

@[code](./rulesCode/css-quote-marks.css)

</template>
</SingleRuleItem>

<SingleRuleItem id="css-naming-rule" title="命名">
    <template #detail>
        <ul>
            <li>类名使用小写字母，以中划线分隔</li>
            <li>id采用驼峰式命名</li>
            <li>scss中的变量、函数、混合、placeholder采用驼峰式命名</li>
        </ul>
    </template>
<template #code>

@[code](./rulesCode/css-naming.scss)

</template>
</SingleRuleItem>

<SingleRuleItem id="css-declaration-order" title="属性声明顺序">
    <template #detail>
        <p>相关的属性声明按右边的顺序做分组处理，组之间需要有一个空行。</p>
    </template>
<template #code>

@[code](./rulesCode/css-declaration-order.css)
@[code](./rulesCode/css-declaration-order.js)

</template>
</SingleRuleItem>

<SingleRuleItem id="css-color" title="颜色">
    <template #detail>
        <p>颜色16进制用小写字母；</p>
        <p>颜色16进制尽量用简写。</p>
    </template>
<template #badCode>

@[code](./rulesCode/css-color-bad.css)

</template>
<template #goodCode>

@[code](./rulesCode/css-color-good.css)

</template>
</SingleRuleItem>

<SingleRuleItem id="css-shorthand" title="属性简写">
    <template #detail>
        <p>属性简写需要你非常清楚属性值的正确顺序，而且在大多数情况下并不需要设置属性简写中包含的所有值，所以建议尽量分开声明会更加清晰；</p>
        <p><code>margin</code> 和 <code>padding</code> 相反，需要使用简写；</p>
        <p>常见的属性简写包括：</p>
        <ul>
            <li><code>font</code></li>
            <li><code>background</code></li>
            <li><code>transition</code></li>
            <li><code>animation</code></li>
        </ul>
    </template>
<template #badCode>

@[code](./rulesCode/css-shorthand-bad.css)

</template>
<template #goodCode>

@[code](./rulesCode/css-shorthand-good.css)

</template>
</SingleRuleItem>

<SingleRuleItem id="css-media-queries" title="媒体查询">
    <template #detail>
        <p>尽量将媒体查询的规则靠近与他们相关的规则，不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部，这样做只会让大家以后更容易忘记他们。</p>
    </template>
<template #code>

@[code](./rulesCode/css-media-queries.css)

</template>
</SingleRuleItem>

<SingleRuleItem id="css-scss" title="SCSS相关">
    <template #detail>
        <p>提交的代码中不要有 <code>@debug</code>；</p>
        <div>
            <p>声明顺序：</p>
            <ul>
                <li><code>@extend</code></li>
                <li>不包含 <code>@content</code> 的 <code>@include</code></li>
                <li>包含 <code>@content</code> 的 <code>@include</code></li>
                <li>自身属性</li>
                <li>嵌套规则</li>
            </ul>
        </div>
        <p><code>@import</code> 引入的文件不需要开头的'_'和结尾的'.scss'；</p>
        <p>嵌套最多不能超过5层；</p>
        <p><code>@extend</code> 中使用placeholder选择器；</p>
        <p>去掉不必要的父级引用符号'&'。</p>
    </template>
<template #badCode>

@[code](./rulesCode/css-scss-bad.scss)

</template>
<template #goodCode>

@[code](./rulesCode/css-scss-good.scss)

</template>
</SingleRuleItem>

<SingleRuleItem id="css-miscellaneous" title="杂项">
    <template #detail>
        <p>不允许有空的规则；</p>
        <p>元素选择器用小写字母；</p>
        <p>去掉小数点前面的0；</p>
        <p>去掉数字中不必要的小数点和末尾的0；</p>
        <p>属性值'0'后面不要加单位；</p>
        <p>同个属性不同前缀的写法需要在垂直方向保持对齐，具体参照右边的写法；</p>
        <p>无前缀的标准属性应该写在有前缀的属性后面；</p>
        <p>不要在同个规则里出现重复的属性，如果重复的属性是连续的则没关系；</p>
        <p>不要在一个文件里出现两个相同的规则；</p>
        <p>用 <code>border: 0;</code> 代替 <code>border: none;</code>；</p>
        <p>选择器不要超过4层（在scss中如果超过4层应该考虑用嵌套的方式来写）；</p>
        <p>发布的代码中不要有 <code>@import</code>；</p>
        <p>尽量少用'*'选择器。</p>
    </template>
<template #badCode>

@[code](./rulesCode/css-miscellaneous-bad.css)

</template>
<template #goodCode>

@[code](./rulesCode/css-miscellaneous-good.css)

</template>
</SingleRuleItem>

<div class="heading" id="javascript">
    <h2>JavaScript</h2>
</div>

<SingleRuleItem id="js-indentation" title="缩进">
    <template #detail>
        <p>使用soft tab（4个空格）。</p>
    </template>
<template #code>

@[code](./rulesCode/js-indentation.js)

</template>
</SingleRuleItem>

<SingleRuleItem id="js-line-max-length" title="单行长度">
    <template #detail>
        <p>不要超过80，但如果编辑器开启word wrap可以不考虑单行长度。</p>
    </template>
</SingleRuleItem>

<SingleRuleItem id="js-semicolon" title="分号">
    <template #detail>
        <p>以下几种情况后需加分号：</p>
        <ul>
            <li>变量声明</li>
            <li>表达式</li>
            <li>return</li>
            <li>throw</li>
            <li>break</li>
            <li>continue</li>
            <li>do-while</li>
        </ul>
    </template>
<template #code>

@[code](./rulesCode/js-semicolon.js)

</template>
</SingleRuleItem>

<SingleRuleItem id="js-space" title="空格">
    <template #detail>
        <p>以下几种情况不需要空格：</p>
        <ul>
            <li>对象的属性名后</li>
            <li>前缀一元运算符后</li>
            <li>后缀一元运算符前</li>
            <li>函数调用括号前</li>
            <li>无论是函数声明还是函数表达式，'('前不要空格</li>
            <li>数组的'['后和']'前</li>
            <li>对象的'{'后和'}'前</li>
            <li>运算符'('后和')'前</li>
        </ul>
        <p>以下几种情况需要空格：</p>
        <ul>
            <li>二元运算符前后</li>
            <li>三元运算符'?:'前后</li>
            <li>代码块'{'前</li>
            <li>下列关键字前：<code>else</code>, <code>while</code>, <code>catch</code>, <code>finally</code></li>
            <li>下列关键字后：<code>if</code>, <code>else</code>, <code>for</code>, <code>while</code>, <code>do</code>, <code>switch</code>, <code>case</code>, <code>try</code>, <code>catch</code>, <code>finally</code>, <code>with</code>, <code>return</code>, <code>typeof</code></li>
            <li>单行注释'//'后（若单行注释和代码同行，则'//'前也需要），多行注释'*'后</li>
            <li>对象的属性值前</li>
            <li>for循环，分号后留有一个空格，前置条件如果有多个，逗号后留一个空格</li>
            <li>无论是函数声明还是函数表达式，'{'前一定要有空格</li>
            <li>函数的参数之间</li>
        </ul>
    </template>
<template #badCode>

@[code](./rulesCode/js-space-bad.js)

</template>
<template #goodCode>

@[code](./rulesCode/js-space-good.js)

</template>
</SingleRuleItem>

<SingleRuleItem id="js-blank-line" title="空行">
    <template #detail>
        <p>以下几种情况需要空行：</p>
        <ul>
            <li>变量声明后（当变量声明在代码块的最后一行时，则无需空行）</li>
            <li>注释前（当注释在代码块的第一行时，则无需空行）</li>
            <li>代码块后（在函数调用、数组、对象中则无需空行）或 <strong>不同逻辑的代码块</strong>(在同一个作用域中)之间</li>
            <li>文件最后保留一个空行</li>
        </ul>
    </template>
<template #code>

@[code](./rulesCode/js-blank-line.js)

</template>
</SingleRuleItem>

<SingleRuleItem id="js-new-line" title="换行">
    <template #detail>
        <p>换行的地方，行末必须有','或者运算符；</p>
        <p>以下几种情况不需要换行：</p>
        <ul>
            <li>下列关键字后：<code>else</code>, <code>catch</code>, <code>finally</code></li>
            <li>代码块'{'前</li>
        </ul>
        <p>以下几种情况需要换行：</p>
        <ul>
            <li>代码块'{'后和'}'前</li>
            <li>变量赋值后</li>
        </ul>
    </template>
<template #badCode>

@[code](./rulesCode/js-new-line-bad.js)

</template>
<template #goodCode>

@[code](./rulesCode/js-new-line-good.js)

</template>
</SingleRuleItem>

<SingleRuleItem id="js-comments-single-line" title="单行注释">
    <template #detail>
        <p>双斜线后，必须跟一个空格；</p>
        <p>缩进与下一行代码保持一致；</p>
        <p>可位于一个代码行的末尾，与代码间隔一个空格。</p>
    </template>
<template #code>

@[code](./rulesCode/js-comments-single-line.js)

</template>
</SingleRuleItem>

<SingleRuleItem id="js-comments-multiline" title="多行注释">
    <template #detail>
        <p>最少三行, '*'后跟一个空格，具体参照右边的写法；</p>
        <p>建议在以下情况下使用：</p>
        <ul>
            <li>难于理解的代码段</li>
            <li>可能存在错误的代码段</li>
            <li>浏览器特殊的HACK代码</li>
            <li>业务逻辑强相关的代码</li>
        </ul>
    </template>
<template #code>

@[code](./rulesCode/js-comments-multiline.js)

</template>
</SingleRuleItem>

<SingleRuleItem id="js-comments-documentation" title="文档注释">
    <template #detail>
        <p>各类标签@param, @method等请参考<a href="http://usejsdoc.org/" target="_blank">usejsdoc</a>和<a href="http://yuri4ever.github.io/jsdoc/" target="_blank">JSDoc Guide</a>；</p>
        <p>建议在以下情况下使用：</p>
        <ul>
            <li>所有常量</li>
            <li>所有函数</li>
            <li>所有类</li>
        </ul>
    </template>
<template #code>

@[code](./rulesCode/js-comments-documentation.js)

</template>
</SingleRuleItem>

<SingleRuleItem id="js-quote-marks" title="引号">
    <template #detail>
         <p>最外层统一使用单引号。</p>
    </template>
<template #code>

@[code](./rulesCode/js-quote-marks.js)

</template>
</SingleRuleItem>



