<script lang="ts">
	import { toggleMode, mode } from 'mode-watcher';
</script>

<button class="btn btn-text w-29.5 text-start sm:w-26" onclick={toggleMode}>
	m: mode ~ <span>{mode.current}</span>
</button>
