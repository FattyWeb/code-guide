<script setup>

</script>

<template>
  <div class="heading" id="toc">
    <h2>目录</h2>
  </div>

  <div class="section toc">
    <div class="col">
      <h4><a href="#naming">命名规则</a></h4>
      <ul>
        <li><a href="#project-naming">项目命名</a></li>
        <li><a href="#folder-naming">目录命名</a></li>
        <li><a href="#js-naming">JS文件命名</a></li>
        <li><a href="#css-naming">CSS, SCSS文件命名</a></li>
        <li><a href="#html-naming">HTML文件命名</a></li>
      </ul>
    </div>
    <div class="col">
      <h4><a href="#html">HTML</a></h4>
      <ul>
        <li><a href="#html-syntax">语法</a></li>
        <li><a href="#html-doctype">HTML5 doctype</a></li>
        <li><a href="#html-lang">lang属性</a></li>
        <li><a href="#html-encoding">字符编码</a></li>
        <li><a href="#html-ie-compatibility-mode">IE兼容模式</a></li>
        <li><a href="#html-style-script">引入CSS, JS</a></li>
        <li><a href="#html-attribute-order">属性顺序</a></li>
        <li><a href="#html-boolean-attributes">boolean属性</a></li>
        <li><a href="#html-javascript">JS生成标签</a></li>
        <li><a href="#html-reducing-markup">减少标签数量</a></li>
        <li><a href="#html-practicality">实用高于完美</a></li>
      </ul>
    </div>
    <div class="col">
      <h4><a href="#css">CSS, SCSS</a></h4>
      <ul>
        <li><a href="#css-indentation">缩进</a></li>
        <li><a href="#css-semicolon">分号</a></li>
        <li><a href="#css-space">空格</a></li>
        <li><a href="#css-blank-line">空行</a></li>
        <li><a href="#css-new-line">换行</a></li>
        <li><a href="#css-comments">注释</a></li>
        <li><a href="#css-quote-marks">引号</a></li>
        <li><a href="#css-naming-rule">命名</a></li>
        <li><a href="#css-declaration-order">属性声明顺序</a></li>
        <li><a href="#css-color">颜色</a></li>
        <li><a href="#css-shorthand">属性简写</a></li>
        <li><a href="#css-media-queries">媒体查询</a></li>
        <li><a href="#css-scss">SCSS相关</a></li>
        <li><a href="#css-miscellaneous">杂项</a></li>
      </ul>
    </div>
    <div class="col">
      <h4><a href="#javascript">JavaScript</a></h4>
      <ul>
        <li><a href="#js-indentation">缩进</a></li>
        <li><a href="#js-line-max-length">单行长度</a></li>
        <li><a href="#js-semicolon">分号</a></li>
        <li><a href="#js-space">空格</a></li>
        <li><a href="#js-blank-line">空行</a></li>
        <li><a href="#js-new-line">换行</a></li>
        <li><a href="#js-comments-single-line">单行注释</a></li>
        <li><a href="#js-comments-multiline">多行注释</a></li>
        <li><a href="#js-comments-documentation">文档注释</a></li>
        <li><a href="#js-quote-marks">引号</a></li>
        <li><a href="#js-variable-naming">变量命名</a></li>
        <li><a href="#js-variable-declaration">变量声明</a></li>
        <li><a href="#js-function">函数</a></li>
        <li><a href="#js-array-object">数组、对象</a></li>
        <li><a href="#js-brace">括号</a></li>
        <li><a href="#js-literal-value-null">null</a></li>
        <li><a href="#js-literal-value-undefined">undefined</a></li>
        <li><a href="#js-jshint">jshint</a></li>
        <li><a href="#js-miscellaneous">杂项</a></li>
      </ul>
    </div>
    <div class="col">
      <h4><a href="#check">编辑器配置和构建检查</a></h4>
      <ul>
        <li><a href="#check-sublime3">sublime3插件</a></li>
        <li><a href="#check-grunt">grunt插件</a></li>
      </ul>
    </div>
  </div>

  <div class="section" id="golden-rule">
    <div class="col">
      <h2>最佳原则</h2>
      <p>坚持制定好的代码规范。</p>
      <p>无论团队人数多少，<strong>代码应该同出一门。</strong> </p>
      <p>每个规范的标题后的链接图标 会展示改规则对应的 <strong><a href="https://eslint.org/">eslint rule</a></strong></p>
      <p>如果你想要为这个规范做贡献或觉得有不合理的地方，请访问<a href="https://github.com/AlloyTeam/CodeGuide/issues/new">New Issue</a>。</p>
    </div>
  </div>
</template>

<style scoped>


/* Make the ToC a whole section */
.toc .col + .col {
  background-color: #fff;
}
</style>
