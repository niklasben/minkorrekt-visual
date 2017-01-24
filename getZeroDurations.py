# -*- coding: utf-8 -*-
"""Save the number of an episode if the duration is 0."""

import json
from pprint import pprint

with open('website/data/complete.json') as openfile:
    d = json.load(openfile)
    pprint(d)
