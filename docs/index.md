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

<SingleRuleItem id="html-lang" title="lang属性">
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
