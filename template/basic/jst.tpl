<table class="w-table">
  <thead>
    <tr><th>序号</th><th>姓名</th><th>性别</th></tr>
  </thead>
  {if !defined("workers")}
  <tr><td colspan="3">数据加载失败，请稍后再试！</td></tr>
  {elseif workers&&workers.length}
    {list workers as x}
      <tr{if x_index==x_length-1} class="last"{/if}>
        <td>${x_index+1}</td>
        <td>${x.name|default:'Unknown'|prefix:x_index}</td>
        <td>{if x.gender==1}男{else}女{/if}</td>
      </tr>
    {/list}
  {else}
  <tr><td colspan="3">没有工人！</td></tr>
  {/if}
</table>
