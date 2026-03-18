<script lang="ts">
	import { page } from '$app/state';
	import AsciiPrint from '$lib/components/ascii-print.svelte';
	import * as Navbar from '$lib/components/navbar/index';

	let status = page.status;
	let title = status === 404 ? 'Page not found' : 'Error';
	let description =
		status === 404
			? 'could not find the page you were looking for'
			: 'an unexpected error has occured';

	let bannerError = `
      :::::::::: :::::::::  :::::::::   ::::::::  ::::::::: 
     :+:        :+:    :+: :+:    :+: :+:    :+: :+:    :+: 
    +:+        +:+    +:+ +:+    +:+ +:+    +:+ +:+    +:+  
   +#++:++#   +#++:++#:  +#++:++#:  +#+    +:+ +#++:++#:    
  +#+        +#+    +#+ +#+    +#+ +#+    +#+ +#+    +#+    
 #+#        #+#    #+# #+#    #+# #+#    #+# #+#    #+#     
########## ###    ### ###    ###  ########  ###    ###     
                                                          
something                  went                wrong      
`;

	let banner404 = `
        :::      :::::::      ::: 
      :+:      :+:   :+:    :+:   
    +:+ +:+   +:+   +:+   +:+ +:+ 
  +#+  +:+   +#+   +:+  +#+  +:+  
+#+#+#+#+#+ +#+   +#+ +#+#+#+#+#+ 
     #+#   #+#   #+#       #+#    
    ###    #######        ###     
                                  
              page not found
`;
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<Navbar.Main />

<main
	class="container m-auto flex max-w-xl items-center justify-center overflow-hidden italic sm:py-28"
>
	{#if status === 404}
		<AsciiPrint class="h-32 w-51" text={banner404} />
	{:else}
		<AsciiPrint class="h-32 w-90" text={bannerError} />
	{/if}

	<h1 class="sr-only">
		title: {title}
		status: {status}
		description: {description}
	</h1>
</main>
