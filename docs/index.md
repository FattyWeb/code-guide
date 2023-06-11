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
            <li>不要在自动闭合标签结尾处使用斜线（<a href="http://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag">HTML5 规范</a> 指出他们是可选的）；</li>
            <li>不要忽略可选的关闭标签，例：<code>&lt;/li&gt;</code> 和 <code>&lt;/body&gt;</code>。</li>
        </ul>
    </template>
<template #code>
    
@[code](./rulesCode/html-syntax.html)

</template>
</SingleRuleItem>



