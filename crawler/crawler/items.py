# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class CrawlerItem(scrapy.Item):
    """Save scraped information in variables."""

    # define the fields for your item here like:
    number = scrapy.Field()
    titlemain = scrapy.Field()
    pubdate = scrapy.Field()
    pubday = scrapy.Field()
    pubtime = scrapy.Field()
    pubtime_integer = scrapy.Field()
    url = scrapy.Field()
    duration = scrapy.Field()
    duration_integer = scrapy.Field()
    titlesub = scrapy.Field()
    specials = scrapy.Field()
    # description = scrapy.Field()
    # china = scrapy.Field()
    # datetime = scrapy.Field()
