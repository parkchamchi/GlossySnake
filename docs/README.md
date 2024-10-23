# New plans

## New model: `gsv5`
Using XML.

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<glossysnake-text version="5">
	<metadata>
		<item type="title">The title</item>
		<item type="author">Author</item>
		<item type="annotation-info">Machine-glossed, etc.</item>
		<item type="original-language">Latin</item>
		<item type="gloss-language">English</item>
		<item type="note">Information about the text</item>
	</metadata>

	<html>
		The innocent, if weak, are oppressed under false pretences.
		<br />
		<span class="token-span" id="t0">Lupus</span> <span class="token-span" id="t1">et</span> <span class="token-span" id="t2">Agnus</span> <span class="token-span" id="t3">venerant</span> <span class="token-span" id="t4">ad</span> <span class="token-span" id="t5">endum</span> <span class="token-span" id="t6">rivum</span>, <span class="token-span" id="t7">compulsi</span> <span class="token-span" id="t8">siti</span>:
		<br />
		<span class="token-span" id="t9">lupus</span> <span class="token-span" id="t10">stabat</span> <span class="token-span" id="t11">superior</span>, <span class="token-span" id="t12">que</span> <span class="token-span" id="t13">agnus</span> <span class="token-span" id="t14">longè</span> <span class="token-span" id="t15">inferior</span>:
	</html>

	<glosses>
		<gloss for="t0">A-wolf</gloss>
		<gloss for="t1">and</gloss>
		<gloss for="t2">a-lamb</gloss>
		<gloss for="t9">The-wolf</gloss>
		<gloss for="t10">was-standing</gloss>
		<gloss for="t11">higher</gloss>
		<gloss for="t12" special="unknown" />
		<gloss for="t13" special="to-reannotate" />
	</glosses>
</glossysnake-text>
```

## Frontend data structure
- On `indexDB`, open DB `"corpusDBv5"`.
- Instead of locking the scroll, only load the mattering component.
