"""users

Revision ID: b52a12f9a095
Revises: f2607372a54e
Create Date: 2023-10-26 08:52:25.791609

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = 'b52a12f9a095'
down_revision = 'f2607372a54e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.drop_column('age')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.add_column(sa.Column('age', mysql.INTEGER(display_width=11), autoincrement=False, nullable=False))

    # ### end Alembic commands ###