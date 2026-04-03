<script>
	import AsciiPrint from '$lib/components/ascii-print.svelte';
	import * as Navbar from '$lib/components/navbar/index';

	const banner = `
           .                      +++          
           *=   .+               :*-           
            ++: +=            ..+*:            
             =+++        ..  .*++   ....       
              :++        ==  =+*-              
               =++  -    =++++++  -*:     .    
                +=***   :+*+*+*  :+=     +=    
              .-:*++.     - ..+.++=      +.    
               = *+.=     :....-=       -*.  .-
      .        +....:.   -.:..=.       =**++=  
  .. .++        +-..:. . ::..:      .=++:.     
   ==+*=        .::..:...:: ....-+++**.        
      .****++....::..:::::..::.:.=***=+*+=:-=-=
    .:=+*+-.:.............::.=..         ..  -+
**+=+=++*=+++=-.:-::......::.: .    .-        -
:           -++==:.:.:.....:...=-++-           
              .=....:..:......:.-              
          *==+:-:..::..::.:.....=.             
            +*=.:.:::...::.....:.**+.          
            +:...-=::*::-=:.:....*=            
           =+==:  ++==*. :-.:= ++*             
     :. - ++=    :*-.=-:==**=   +*=            
     .: :++     --.      -*+.  :.+*            
     :: -+    -  .         +.     ++           
      :=--*+=                   :+*+=          
   -+-+.:                      -   .*:         
    :+  :                            +..:      
   .*        ..                      .+.       
             .=.                      +        
                                      -        
`;

	let completed = $state(false);
</script>

<Navbar.Main />

<main class="container max-w-3xl py-28 md:m-auto">
	<div class="gap-x-10 md:flex md:flex-row">
		<header>
			<AsciiPrint
				class="md:h-109"
				text={banner}
				oncomplete={() => (completed = true)}
				chunkSize={24}
			/>
		</header>

		{#if completed}
			<div>
				<h1 class="mt-12 font-mono text-xs! leading-3 -tracking-widest md:mt-0">
					battle
					<span class="ml-10">censorship</span>
				</h1>
				<br />
				<p class="max-w-lg text-muted-foreground md:max-w-none">
					Enable snowflake proxy and leave it on to donate bandwith and help tor users bypass
					censorship and access internet freely.
				</p>

				<br />
				<a
					href="https://snowflake.dottmp.dev"
					target="_blank"
					rel="noopener noreferrer"
					class="btn btn-link"
					tabindex="1"
				>
					go to proxy &#8605
				</a>
			</div>
		{/if}
	</div>
</main>
