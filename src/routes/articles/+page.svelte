<script lang="ts">
	import type { PageProps } from './$types';

	import Article from '$lib/components/article.svelte';
	import AsciiPrint from '$lib/components/ascii-print.svelte';
	import * as Navbar from '$lib/components/navbar/index';

	let { data }: PageProps = $props();

	const banner = `
              ...                                                        =*.    ...                 
             .*=.                        .*.                             -@*. .*@=.                 
            .*@                          .#*.                            .@@@@@@-.        ..        
           .#@#                     .=:.  +@-.              .+.    .+%##%@@@@@@+.        ...        
           *@@-                       .%@#%@@...*@.         %*        ...%@@@@@@#.       .          
        ..%@@@*......        ...        .@@@@@@@#.        .*@=           .%@@@%###=.    :@          
     ..:#@@@@@@@@@@+.       .-+.        .%@@@@@#.        .=@@-            %*...         =@..        
     .#%@@@@@@@@#..         .@=. ...    .%@%+@@=.       .:@@@-......     .#.           .%@=.        
       .%@@@@@@=.          .%@=..=#:    .*.  .=@.      .=@@@@@@@@@*.     =-            :@@@.        
     ..@@@@@@@@..     .@@%*@@@@@@:.            .*.  ..*@@@@@@@@@=..      ..       .##%@@@@@:=@:     
    ..@@%:. .*@.       .%@@@@@@#.                   ..:=@@@@@@#.                  ..%@@@@@@@@*.     
    :@*.      .         .@@@@@@+.                     .*@@@@@@*                      :@@@@@@@-      
 . .:.                  .%@#.+@+.                    .+@@@-.+@#                       #@@@@@@=.     
..                      =@:  ..:.                   .-@#..   .=.                     :@@%=#@@#.     
                       .*.                          =%..                             *%.  .:@@-     
                                                 ..                                         .%*.    
                                                ...                                         ..%.    
                                                                                             ...    



writings      on          development       and          stuff
`;

	const bannerSM = `
              ...                                                        =*.    ...                 
             .*=.                        .*.                             -@*. .*@=.                 
            .*@                          .#*.                            .@@@@@@-.        ..        
           .#@#                     .=:.  +@-.              .+.    .+%##%@@@@@@+.        ...        
           *@@-                       .%@#%@@...*@.         %*        ...%@@@@@@#.       .          
        ..%@@@*......        ...        .@@@@@@@#.        .*@=           .%@@@%###=.    :@          
     ..:#@@@@@@@@@@+.       .-+.        .%@@@@@#.        .=@@-            %*...         =@..        
     .#%@@@@@@@@#..         .@=. ...    .%@%+@@=.       .:@@@-......     .#.           .%@=.        
       .%@@@@@@=.          .%@=..=#:    .*.  .=@.      .=@@@@@@@@@*.     =-            :@@@.        
     ..@@@@@@@@..     .@@%*@@@@@@:.            .*.  ..*@@@@@@@@@=..      ..       .##%@@@@@:=@:     
    ..@@%:. .*@.       .%@@@@@@#.                   ..:=@@@@@@#.                  ..%@@@@@@@@*.     
    :@*.      .         .@@@@@@+.                     .*@@@@@@*                      :@@@@@@@-      
 . .:.                  .%@#.+@+.                    .+@@@-.+@#                       #@@@@@@=.     
..                      =@:  ..:.                   .-@#..   .=.                     :@@%=#@@#.     
                       .*.                          =%..                             *%.  .:@@-     
                                                 ..                                         .%*.    
                                                ...                                         ..%.    
                                                                                             ...    



writings      on          development

and          stuff
`;

	let completed = $state(false);
</script>

<Navbar.Main />

<main class="container w-full flex-1">
	<header class="overflow-x-hidden pt-28 pb-28 sm:pt-40">
		<AsciiPrint
			class="hidden sm:block"
			chunkSize={32}
			text={banner}
			oncomplete={() => (completed = true)}
		/>
		<AsciiPrint
			class="block sm:hidden"
			chunkSize={32}
			text={bannerSM}
			oncomplete={() => (completed = true)}
		/>
		<h1 class="sr-only">Writings on development and stuff</h1>
	</header>

	{#if completed}
		<ul class="grid grid-cols-12">
			{#each data.articles as article, index (article.slug)}
				<li class="col-span-full pr-4 pb-10 md:col-span-6 md:pr-10">
					<Article tabindex={index + 1} {article} />
				</li>
			{/each}
		</ul>
	{/if}
</main>
