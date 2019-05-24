<template>
  <div id="app">
    <nav class="navbar navbar-default navbar-static-top" role="navigation">
    	<router-link class="navbar-brand" to="/">首页</router-link>
    	<ul class="nav navbar-nav">
    		<li class="active">
    			<router-link to="/List">列表页+分页</router-link>
    		</li>
    		<li>
    			<router-link to="/Form">表单提交</router-link>
    		</li>
			<li>
    			<router-link to="/draggable">托拽排列</router-link>
    		</li>
    	</ul>
    </nav>
    <transition name="custom-classes-transition" enter-class="animated"  leave-class="animated fadeOut" >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
