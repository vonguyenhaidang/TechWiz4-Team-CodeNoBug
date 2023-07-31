use master
go 
create database ThriftFashion
go
use ThriftFashion
go

CREATE TABLE tblAdmin
(
	adminID nvarchar(10),
	username nvarchar(30),
	enabled bit,
	role nvarchar(10),
	email nvarchar(40),
	password varchar(70),
	tel nvarchar(20),
	address nvarchar(50),
	CONSTRAINT PK_tblAdmin PRIMARY KEY(adminID)
)

CREATE TABLE tblCategory
(
	catID nvarchar(10),
	catName nvarchar(50),
	catDesc nvarchar(500),
	CONSTRAINT PK_tblCategory PRIMARY KEY(catID)
)
CREATE TABLE tblCondition
(
	conID nvarchar(10),
	conName nvarchar(50),
	conDesc nvarchar(225),
	CONSTRAINT PK_TblCondition PRIMARY KEY (conID)
)

CREATE TABLE tblProducts
(
	prodID nvarchar(10),
	prodName nvarchar(255),
	prodPrice float,
	prodDesc nvarchar(500),
	available bit,
	catID nvarchar(10),
	conID nvarchar(10),
	CONSTRAINT PK_tblProducts PRIMARY KEY(prodID),
	CONSTRAINT FK_tblProducts FOREIGN KEY(catID) references tblCategory(catID), FOREIGN KEY(conID) references tblCondition(conID)
)


/*DATA CHO CÁC BẢNG*/
insert into tblCondition values('con1','Never worn, with tag','The original tags are attached, the item is as new and has never been worn.')
insert into tblCondition values('con2','Never worn','The original tags are not attached, but the item is as new and has never been worn.')
insert into tblCondition values('con3','Very good condition','A second-hand item that is hardly worn and has been very well maintained, although it may have slight defects from wear. Any flaws or alterations must be clearly described when listing the item.')
insert into tblCondition values('con4','Good condition','A second-hand item that has been worn but is well maintained. Flaws must be mentioned in the description and be visible in photos.')
insert into tblCondition values('con5','Fair condition','A second-hand item that has been worn but is well maintained. Flaws must be mentioned in the description and be visible in photos.')
/*Bảng Category*/
insert into tblCategory values('cate1','Blazer','The blazer is a harmonious variation based on the vest jacket with changeable lines to create a variety of styles as well as more comfort for the wearer.')
insert into tblCategory values('cate2','Jackets','Jackets are outerwear worn by both men and women for the purpose of keeping warm or creating fashion. Jackets are often designed with long sleeves and a longer bodice than regular shirts.')
insert into tblCategory values('cate3','Shirt','A shirt is a garment that covers the torso and arms of the body. In the 19th century, a shirt was a type of woven undershirt worn close to the skin. Today, shirts have collars, sleeves, and front buttons')
insert into tblCategory values('cate4','Cardigan','Cardigan is a woven cardigan that opens on the chest. Usually, cardigans are embroidered with buttons on the front and are widely used to suit all genders.')
insert into tblCategory values('cate5','Hoodie','A hoodie is a shirt with a hood. Zippered hoodies typically include two pockets on the bottom of the front, one on either side of the zipper, while a "pullover" hoodie typically includes a single large pocket or pocket in the same location.')
/*Bảng Products*/
insert into tblProducts values('prod1','BLAZER SUIT SET 100% LINEN FABRIC',147.89,'Linen blazer jacket, straight fit. Flip-up lapel, K-style lapel. Long-sleeve, button-down cuffs. There is a hem pocket on the chest and flap pockets on the sides. There is a pocket in the inner lining. Cut two lines at the back hem. Fasten the front with a button.',1,'cate1','con3')
insert into tblProducts values('prod2','Paradox T-shirt WATER reflective',17.75,'260gsm 2-way cotton fabric Oversized fit silk-screen print material',1,'cate3','con2')
insert into tblProducts values('prod3','Knitted cardigan',163.31,'Knitted cardigan, V-neck, Plaid, Two pockets, Long-sleeve top',0,'cate4','con4')
insert into tblProducts values('prod4','FUZZY RABBIT CREAM HOODIE',103.94,'sewn from carefully selected materials, delicate designs, bringing strength and youth to everyone. This is the perfect combination of materials, designs and colors',1,'cate5','con3')

/*Bảng Admin / User*/
insert into tblAdmin values('admin1','HienCM',1,'ADMIN','minhhien@gmail.com','$2a$10$rO/uNwgYgF2AmIPB4nhRi.mI6NF2xAOPbTQ4im84tSniqBfCdPgYC','(253) 644-2182','Auburn, WA')
insert into tblAdmin values('admin2','DangVNH',1,'ADMIN','haidang@gmail.com','$2a$10$rO/uNwgYgF2AmIPB4nhRi.mI6NF2xAOPbTQ4im84tSniqBfCdPgYC','(248) 762-0356','Farmington Hills, MI')
insert into tblAdmin values('user1','LongLH',1,'USER','longlh@user.com','$2a$10$TdmhWgtaAPW1KfJNIvvZBucJdXWiBlqvriEOWldrShrNJ2SI8D9eu','(717) 550-1675','Harrisburg, PA')
insert into tblAdmin values('user2','MinhAL',1,'USER','minhal@user.com','$2a$10$TdmhWgtaAPW1KfJNIvvZBucJdXWiBlqvriEOWldrShrNJ2SI8D9eu','(201) 874-8593','Bayonne, NJ')


select * from tblCategory
delete from tblAdmin where adminID='user1'