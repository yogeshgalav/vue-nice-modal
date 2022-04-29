<template>
  <div
    :id="name"
    :ref="name"
    class="modal fade"
    role="dialog"
    tabindex="-1"
    :aria-labelledby="name"
    aria-hidden="true"
  >
    <div
      :class="fullsize ? 'modal-fullscreen' : ''"
    >
      <div
        :class="['modal-dialog', classes]"
      >
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header pt-3 pb-2">
            <h4 class="weight-800 font-size-18">
              {{ heading }}
            </h4>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="cancel"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body add-client">
            <slot name="modalBody" />
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-md btn-primary mt-3"
              type="button"
              @click.prevent="$emit('submit')"
            >
              {{ 'Submit' }}
            </button>  <button
              ref="cancelButton"
              type="button"
              class="btn btn-md btn-white mt-3"
              data-dismiss="modal"
              @click.prevent="closeModal"
              @click="cancel"
            >
              {{ 'Cancel' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.modal-dialog{
  position: absolute;
    width: 90%;
    /* margin-top: 50%; */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 !important;
}
</style>

<script>
export default {
	props:{
		name:{
			default:'',
			required:true,
		},
		heading:{
			default:'',
			required:true,
		},
		classes:{
			default:'',
			required:false,
		},
		fullsize:{
			default:true,
			required:false,
		},
	},
	data(){
	    return {
			
		};
	},
	methods:{
		closeModal(){
			this.$refs.cancelButton.click();
			
		},
		cancel(){
			this.$emit('cancel');
		}
	}
};
</script>
