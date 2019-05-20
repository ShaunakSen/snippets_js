#!/bin/python3

import math
import os
import random
import re
import sys



#
# Complete the 'minimumMoves' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER_ARRAY a
#  2. INTEGER_ARRAY m
#

def minimumMoves():
    # Write your code here

    # test values for a and m

    a = [123, 543]
    b = [321, 279]

    a_by_digit = [int(d) for d in str(a)]
    print (a_by_digit)

    
minimumMoves()