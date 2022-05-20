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
.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
}
.modal-header .close {
    padding: 1rem 1rem;
    margin: -1rem -1rem -1rem auto;
}

/* modelborder */
.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #ffff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
}

/* model pop up area */
.modal-dialog{
  position: absolute;
    width: 30%;
    margin-top: 0%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 !important;
}
/* model name */
.modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0.2rem 0.5rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
}

/* close button */
button.close {
    padding: 0;
    background-color: transparent;
    border: 0;
}
.modal-header .close {
    padding: 1.1rem 1.2rem;
    margin: -1rem -1rem -1rem auto;
}
.close {
  float: right;
  font-size: 1.35rem;
  font-weight: 600;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #ffff;
  opacity: 0.5;
}
.close:active,
.close:hover {
  color: #000;
  text-decoration: none;
}

.close:not(:disabled):not(.disabled):hover,
.close:not(:disabled):not(.disabled):active {
  opacity: 0.75;
}
/* model content */

.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #ffff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
}
*, *::before, *::after {
    box-sizing: border-box;
}
*, *::before, *::after {
    box-sizing: border-box;
}
::-webkit-scrollbar {
    width: 12px;
}
::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgb(0 0 0 / 50%);
}
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
    border-radius: 10px;
}

/* model footer */

.modal-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
}
.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: #ffff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
}
/* model buttons */
.mt-3 {
    margin-top: 30px !important;
}
.btn-md {
    border: none;
    min-height: 40px;
    padding: 9px 21px !important;
    text-align: center;
    font-size: medium !important;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    font-weight: 700;
    justify-content: center;
}
.btn-primary {
    background: #3646C5 !important;
    font-weight: 800;
    font-family: "Nunito", sans-serif !important;
    text-transform: capitalize;
    font-size: 12px;
    letter-spacing: 0.1em;
}
.mt-3, .my-3 {
    margin-top: 1rem !important;
}
.modal-footer > * {
    margin: 0.25rem;
}
.btn-primary {
    color: #ffff;
    background-color: #3646C5;
    border-color: #3646C5;
}
.btn {
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 15px 50px;
    opacity: 1;
    border-radius: 3px;
}
.btn-white {
    background-color: #fff;
    font-weight: 600;
    border: 1px solid #bdbdbd;
    color: #333 !important;
}
.btn-primary, .btn-primary-accent, .btn-accent, .btn-danger, .btn-disabled, .btn-success, .btn-warning, .btn-disabled, .btn-white, .btn-default {
    font-family: "Nunito", sans-serif !important;
    text-transform: capitalize;
    font-size: 12px;
    letter-spacing: 0.1em;
}

.btn {
    display: inline-block;
    font-weight: 800;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    /* background-color: transparent; */
    /* border: 1px solid transparent; */
    padding: 0.375rem 0.75rem;
    font-size: 0.9rem;
    line-height: 1.6;
    border-radius: 0.25rem;
    /* transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out; */
}
button {
    text-transform: none;
}

button {
    overflow: visible;
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:disabled {
    background: #00c1d5 !important;
    border-color: #00c1d5 !important;
}
.btn:hover, .btn:focus {
    opacity: 0.9;
    transition: all 0.3s;
}
.btn-primary:hover, .btn-primary:focus, .btn-primary:disabled {
    background: #00c1d5 !important;
    border-color: #00c1d5 !important;
}
.btn:hover, .btn:focus {
    opacity: 0.9;
    transition: all 0.3s;
}
.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}
 .btn-primary:active {
            transform: scale(1.01);
            transition :color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            /* Scaling button to 0.98 to its original size */
            box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
            /* Lowering the shadow */
        }

</style>
<!-- <style lang="scss" scoped>
$grid-breakpoints: (
    xs: 0,
    sm: 600px,
    md: 800px,
    lg: 1000px,
    xl: 1280px
);
@each $breakpoint in map-keys($grid-breakpoints) {
    @include media-breakpoint-down($breakpoint) {
      $infix: breakpoint-infix($breakpoint, $grid-breakpoints);
      .modal-fullscreen#{$infix} {
        @include modal-fullscreen();
      }
    }
}
</style> -->

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
