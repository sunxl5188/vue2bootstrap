<template>
    <div class="modal fade" :id="modalId">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 class="modal-title">{{title||"信息提示"}}</h4>
                </div>
                <div class="modal-body">
                    {{msg}}
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
                    <button type="button" class="btn btn-primary">确定</button>
                </div>
            </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->
    </div>
</template>
<script>
	export default {
		name: "modal",
		data() {
			return {}
		},
		props: ["title", "msg", "modalId"]
	}
</script>