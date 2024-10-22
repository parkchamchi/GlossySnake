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

	<paragraphs>
		<paragraph id="p0">The innocent, if weak, are oppressed under false pretences.</paragraph>
		<paragraph id="p1"><token id="t0">Lupus</token> <token id="t1">et</token> <token id="t2">Agnus</token> <token id="t3">venerant</token> <token id="t4">ad</token> <token id="t5">endum</token> <token id="t6">rivum</token>, <token id="t7">compulsi</token> <token id="t8">siti</token>:<paragraph>
		<paragraph id="p1"><token id="t0">lupus</token> <token id="t1">stabat</token> <token id="t2">superior</token>, <token id="t3">que</token> <token id="t4">agnus</token> <token id="t5">longè</token> <token id="t6">inferior</token>:<paragraph>
	</paragraphs>

	<glosses>
		<glosses-for-paragraph for="p1">
			<gloss-for-token for="t0">A-wolf</gloss-for-token>
			<gloss-for-token for="t1">and</gloss-for-token>
			<gloss-for-token for="t0">a-lamb</gloss-for-token>
		</glosses-for-paragraph>
		<glosses-for-paragraph for="p2">
			<gloss-for-token for="t0">The-wolf</gloss-for-token>
			<gloss-for-token for="t1">was-standing</gloss-for-token>
			<gloss-for-token for="t2">higher</gloss-for-token>
			<gloss-for-token for="t3" special="unknown" />
			<gloss-for-token for="t4" special="to-reannotate" />
		</glosses-for-paragraph>
	</glosses>
</glossysnake-text>
```
